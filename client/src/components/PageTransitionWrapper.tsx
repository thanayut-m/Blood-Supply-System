import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router";

export const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.05 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};
