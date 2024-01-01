import { AnimatePresence, motion } from "framer-motion"
import useMeasure from "react-use-measure"
import { PropsWithChildren } from "react"

const duration = 0.4
const ignoreCircularReferences = () => {
    const seen = new WeakSet()
    return (key: string, value: string) => {
        if (key.startsWith("_")) return
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) return
            seen.add(value)
        }
        return value
    };
};

function ResizablePanel({ children }: PropsWithChildren) {
    let [ref, { height }] = useMeasure()

    return (
        <motion.div
            animate={{ height: height || "auto" }}
            className="relative overflow-hidden"
        >
            <AnimatePresence initial={false}>
                <motion.div
                    key={JSON.stringify(children, ignoreCircularReferences())}
                    initial={{
                        opacity: 0,
                        x: 382,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                         transition: { duration: duration / 2, delay: duration / 2 },
                    }}
                    exit={{
                        // opacity: 0,
                        x: -382,
                        transition: { duration: duration / 2 }
                    }}
                >
                    <div
                        ref={ref}
                        className={`${height ? "absolute" : "relative"} `}
                    >
                        {children}
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}

export default ResizablePanel