import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import tw from "tailwind-styled-components";

const StyledNavLink = tw(NavLink)`
	flex
	justify-start
	items-center
	gap-4
	px-5
	py-3
	rounded-full
	font-light
	[&.active]:bg-pink-800
	[&.active]:text-slate-100
	[&.active]:font-semibold
	hover:bg-slate-100
	transition-colors
`;

function SidebarLink({ to, children }: { to: string; children: ReactNode }) {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
}

export default SidebarLink;
