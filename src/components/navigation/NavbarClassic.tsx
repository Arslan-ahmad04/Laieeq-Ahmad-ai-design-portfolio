import { NavContent } from "./NavContent";
import type { NavbarProps } from "./types";
export function NavbarClassic(props: NavbarProps) { return <nav className="navbar navbar--classic" data-position={props.position} data-sticky={props.sticky} aria-label="Primary navigation"><NavContent {...props} /></nav>; }
