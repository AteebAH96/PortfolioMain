import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiExpress,
  SiBootstrap,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/**
 * Maps icon string keys from data.js to actual React Icon components.
 */
const iconMap = {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiCss3: SiCss,
  SiGit,
  SiGithub,
  SiExpress,
  SiBootstrap,
  SiVercel,
  VscVscode,
};

export function getIcon(name) {
  return iconMap[name] || null;
}

export default iconMap;
