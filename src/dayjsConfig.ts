import dayjs from "dayjs";
import de from "dayjs/locale/de";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);
dayjs.locale(de);

export default dayjs;
