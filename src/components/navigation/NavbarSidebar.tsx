import { NavContent } from "./NavContent";
import type { NavbarProps } from "./types";
export function NavbarSidebar(props: NavbarProps) { return <nav className="navbar navbar--sidebar" data-position={props.position} data-sticky={props.sticky} aria-label="Primary navigation"><NavContent {...props} /></nav>; }
