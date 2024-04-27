import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './stylesNav.css'

const mediaQuerry = window.matchMedia("(max-width:500px)")
let sidebar = {}
mediaQuerry.matches ? (
    sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(30px at 70px 70px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
) : (
    sidebar = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(30px at 120px 70px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
)

export const NavMobile = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <>
        {isOpen ? (
            <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className="body nav"
        >
            <motion.div className="background" variants={sidebar} />
            <Navigation toggle={() => toggleOpen()}/>
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
        ):(
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div className="background" variants={sidebar} />
                <Navigation toggle={() => toggleOpen()}/>
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        )}
            
        </>
    );
};