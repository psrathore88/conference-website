import { CalendarDays } from "lucide-react"
import { motion } from "framer-motion"


const conferenceDates = [
  { date: "15 April 2025", day: "Call for Paper" },
  { date: "15 September 2025", day: "Submission Deadline" },
  { date: "1 October 2025", day: "Acceptance Notification" },
  { date: "15 October 2025", day: "Registration Deadline" },
];

export default function ConferenceDates() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-16 gradientbg"
  >
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-semibold mb-8 text-center text-black"
      >
        IMPORTANT DATES
      </motion.h2>
    </div>
  </motion.section>
  )
}

