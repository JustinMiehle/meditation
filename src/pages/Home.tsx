import { Button } from "@/components/ui/button";
import { Pause, Play, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const MeditationApp: React.FC = () => {
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const [time, setTime] = useState<number>(0);
	const [timeouts, setTimeouts] = useState<NodeJS.Timeout[]>([]);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const audioContext = useRef<AudioContext | null>(null);

	useEffect(() => {
		audioContext.current = new (
			window.AudioContext || (window as any).webkitAudioContext
		)();
		return () => {
			audioContext.current?.close();
		};
	}, []);

	const playSound = useCallback((frequency: number, duration: number) => {
		if (!audioContext.current) return;

		const oscillator = audioContext.current.createOscillator();
		const gainNode = audioContext.current.createGain();

		oscillator.connect(gainNode);
		gainNode.connect(audioContext.current.destination);

		oscillator.type = "sine";
		oscillator.frequency.setValueAtTime(
			frequency,
			audioContext.current.currentTime,
		);

		gainNode.gain.setValueAtTime(0, audioContext.current.currentTime);
		gainNode.gain.linearRampToValueAtTime(
			0.5,
			audioContext.current.currentTime + 0.1,
		);
		gainNode.gain.linearRampToValueAtTime(
			0,
			audioContext.current.currentTime + duration,
		);

		oscillator.start(audioContext.current.currentTime);
		oscillator.stop(audioContext.current.currentTime + duration);
	}, []);

	const playRegularBell = useCallback(() => playSound(440, 1), [playSound]); // A4 note
	const playFiveMinuteBell = useCallback(
		() => playSound(554.37, 1.5),
		[playSound],
	); // C#5 note, slightly longer
	const playTenMinuteBell = useCallback(
		() => playSound(659.25, 2),
		[playSound],
	); // E5 note, even longer

	useEffect(() => {
		if (!isRunning) {
			clearInterval(intervalRef.current as NodeJS.Timeout);
			timeouts.forEach(clearTimeout);
			setTimeouts([]);
			return;
		}

		if (time === 0) {
			playRegularBell(); // Play sound at the start
		}

		const SECONDS_IN_MINUTE = 60;
		const MINUTES_IN_FIVE = 5;
		const MINUTES_IN_TEN = 10;

		intervalRef.current = setInterval(() => {
			setTime((prevTime) => {
				const newTime = prevTime + 1;
				if (newTime % (SECONDS_IN_MINUTE * MINUTES_IN_TEN) === 0) {
					// Every 10 minutes
					const tenMinuteBellCount = Math.floor(
						newTime / (SECONDS_IN_MINUTE * MINUTES_IN_TEN),
					);
					const fiveMinuteBellCount =
						Math.floor(newTime / (SECONDS_IN_MINUTE * MINUTES_IN_FIVE)) -
						tenMinuteBellCount;
					let delay = 0;
					const newTimeouts: NodeJS.Timeout[] = [];
					for (const _ of Array(tenMinuteBellCount)) {
						const timeout = setTimeout(() => playTenMinuteBell(), delay);
						newTimeouts.push(timeout);
						delay += 2000;
					}
					for (const _ of Array(fiveMinuteBellCount)) {
						const timeout = setTimeout(() => playFiveMinuteBell(), delay);
						newTimeouts.push(timeout);
						delay += 1500;
					}
					setTimeouts((prevTimeouts) => [...prevTimeouts, ...newTimeouts]);
				} else if (newTime % (SECONDS_IN_MINUTE * MINUTES_IN_FIVE) === 0) {
					// Every 5 minutes
					const tenMinuteBellCount = Math.floor(
						newTime / (SECONDS_IN_MINUTE * MINUTES_IN_TEN),
					);
					const fiveMinuteBellCount =
						Math.floor(newTime / (SECONDS_IN_MINUTE * MINUTES_IN_FIVE)) -
						tenMinuteBellCount;
					let delay = 0;
					const newTimeouts: NodeJS.Timeout[] = [];
					for (const _ of Array(tenMinuteBellCount)) {
						const timeout = setTimeout(() => playTenMinuteBell(), delay);
						newTimeouts.push(timeout);
						delay += 2000;
					}
					for (const _ of Array(fiveMinuteBellCount)) {
						const timeout = setTimeout(() => playFiveMinuteBell(), delay);
						newTimeouts.push(timeout);
						delay += 1500;
					}
					setTimeouts((prevTimeouts) => [...prevTimeouts, ...newTimeouts]);
				} else if (newTime % SECONDS_IN_MINUTE === 0) {
					// Every minute
					playRegularBell();
				}
				return newTime;
			});
		}, 1000);

		return () => {
			clearInterval(intervalRef.current as NodeJS.Timeout);
			timeouts.forEach(clearTimeout);
		};
	}, [
		isRunning,
		time,
		playRegularBell,
		playFiveMinuteBell,
		playTenMinuteBell,
		timeouts,
	]);

	const toggleTimer = () => setIsRunning((prevState) => !prevState);

	const resetTimer = () => {
		setIsRunning(false);
		setTime(0);
		timeouts.forEach(clearTimeout);
		setTimeouts([]);
	};

	const formatTime = (seconds: number): string => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-[url('/meditation-background.jpg')] bg-cover bg-center bg-no-repeat">
			<div className="p-8 bg-white rounded-lg shadow-md  bg-cover bg-center">
				<h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
					Meditation Timer
				</h1>
				<div className="text-6xl font-mono mb-8 text-center">
					{formatTime(time)}
				</div>
				<div className="flex justify-center space-x-4">
					<Button
						onClick={toggleTimer}
						variant="default"
						size="icon"
						aria-label={isRunning ? "Pause" : "Play"}
					>
						{isRunning ? (
							<Pause className="h-6 w-6" />
						) : (
							<Play className="h-6 w-6" />
						)}
					</Button>
					<Button
						onClick={resetTimer}
						variant="secondary"
						size="icon"
						aria-label="Reset"
					>
						<RefreshCw className="h-6 w-6" />
					</Button>
				</div>
			</div>
			<footer className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 bg-opacity-50 text-white text-sm text-center">
				<div className="container mx-auto">
					<span>© 2024 Meditation App. All rights reserved. </span>
					<a href="/imprint" className="ml-2 hover:underline">
						Imprint
					</a>
					<span className="mx-2">|</span>
					<a href="/privacy" className="hover:underline">
						Privacy Policy
					</a>
					<span className="mx-2">|</span>
					<a
						href="https://github.com/justinmiehle"
						className="hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
					<span className="mx-2">|</span>
					<a
						href="https://x.com/justinmiehle"
						className="hover:underline"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Justin Miehle on X"
					>
						<span className="sr-only">Justin Miehle on X</span>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="w-5 h-5 inline-block"
						>
							<path
								fill="currentColor"
								d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
					</a>
				</div>
			</footer>
		</div>
	);
};
export default MeditationApp;
