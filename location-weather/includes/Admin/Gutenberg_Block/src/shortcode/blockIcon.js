import { escapeAttribute } from "@wordpress/escape-html";
import { createElement } from "@wordpress/element";
const el = createElement;
const icons = {};
icons.splwp_icon = el("img", {
  src: escapeAttribute(
    sp_location_weather.url + "/includes/Admin/Gutenberg_Block/assets/lw-icon.svg"
  ),
});
export default icons;