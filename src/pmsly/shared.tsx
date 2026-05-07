import { type ReactNode } from "react";
import { Icon } from "./Icon";

export const Toggle = ({ on, onChange }: { on: boolean; onChange?: (v: boolean) => void }) => (
  <button
    className={"toggle" + (on ? " is-on" : "")}
    onClick={() => onChange && onChange(!on)}
    aria-pressed={on}
  />
);

type BadgeKind = "ok" | "warn" | "danger" | "info" | "neutral" | "accent";
export const Badge = ({
  kind = "neutral",
  children,
  dot = false,
}: {
  kind?: BadgeKind;
  children: ReactNode;
  dot?: boolean;
}) => (
  <span className={"badge badge-" + kind}>
    {dot && <span className="dot" />}
    {children}
  </span>
);

export const AppRail = ({ active }: { active?: string }) => (
  <div className="chrome">
    <div className="chrome-logo">p</div>
    <div className="chrome-icon"><Icon name="search" /></div>
    <div className="chrome-icon"><Icon name="grid" /></div>
    <div className="chrome-icon"><Icon name="cal" /></div>
    <div className="chrome-icon"><Icon name="users" /></div>
    <div className="chrome-icon"><Icon name="msg" /></div>
    <div className="chrome-icon"><Icon name="building" /></div>
    <div className="chrome-icon"><Icon name="plug" /></div>
    <div className="chrome-icon"><Icon name="tag" /></div>
    <div className="chrome-icon"><Icon name="shield" /></div>
    <div className={"chrome-icon" + (active === "settings" ? " is-active" : "")}><Icon name="wrench" /></div>
    <div className="chrome-icon"><Icon name="chart" /></div>
    <div className="chrome-spacer" />
    <div className="chrome-icon"><Icon name="globe" /></div>
    <div className="chrome-icon"><Icon name="sun-moon" /></div>
    <div className="chrome-avatar">SL</div>
    <div className="chrome-add"><Icon name="plus" size={18} /></div>
  </div>
);
