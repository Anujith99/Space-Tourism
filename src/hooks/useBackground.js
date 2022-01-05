import { useEffect } from "react"

export const useBackground = imageClass => {
  useEffect(() => {
    document.documentElement.setAttribute("id", imageClass)
  }, [])
}
