"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const nodes = ["Client", "Checkout", "Gateway", "Webhook", "Application"];
const states = ["created", "processing", "paid", "retry"];

export function TransactionFlow() {
  const reduced = useReducedMotion();
  const [run, setRun] = useState(0);
  return (
    <div
      className="panel relative min-h-[25rem] overflow-hidden p-5 sm:p-7"
      aria-label="Decorative transaction event flow"
    >
      <div className="mono mb-8 flex items-center justify-between text-xs">
        <span className="text-[var(--accent)]">Transaction Flow</span>
        <button
          onClick={() => setRun((value) => value + 1)}
          className="rounded border border-[var(--border)] px-2 py-1 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Replay transaction animation"
        >
          ↻ replay
        </button>
      </div>
      <div className="relative grid grid-cols-5 gap-1">
        <div className="absolute top-5 right-[8%] left-[8%] h-px bg-[var(--border-strong)]" />
        {nodes.map((node, index) => (
          <div
            key={node}
            className="relative z-10 flex flex-col items-center gap-3 text-center"
          >
            <div className="grid size-10 place-items-center rounded border border-[var(--border-strong)] bg-[var(--surface)]">
              <span className="mono text-xs text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="mono text-[.58rem] text-[var(--muted)] sm:text-[.68rem]">
              {node}
            </span>
          </div>
        ))}
        {!reduced && (
          <motion.span
            key={run}
            className="absolute top-[1.05rem] z-20 size-2 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent)]"
            initial={{ left: "8%" }}
            animate={{ left: ["8%", "29%", "50%", "71%", "91%"] }}
            transition={{
              duration: 3.2,
              times: [0, 0.22, 0.46, 0.72, 1],
              ease: "easeInOut",
            }}
          />
        )}
      </div>
      <div className="mt-11 space-y-4">
        {states.map((state, index) => (
          <div
            key={state}
            className="grid grid-cols-[5.5rem_1fr] items-center gap-3"
          >
            <span className="mono text-[.65rem] text-[var(--muted)]">
              {state}
            </span>
            <div className="relative h-px bg-[var(--border)]">
              <motion.i
                key={`${run}-${state}`}
                className={`absolute -top-[3px] size-[7px] rounded-full ${index === 2 ? "bg-[var(--success)]" : index === 3 ? "bg-[var(--accent-secondary)]" : "bg-[var(--accent)]"}`}
                initial={
                  reduced ? { left: `${22 + index * 17}%` } : { left: "0%" }
                }
                animate={{ left: `${22 + index * 17}%` }}
                transition={{ delay: 0.35 + index * 0.48, duration: 0.7 }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mono absolute right-5 bottom-4 text-[.58rem] text-[var(--muted)]">
        event-safe · idempotent · observable
      </div>
    </div>
  );
}
