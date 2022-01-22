import { useState, useEffect, MutableRefObject } from 'react'

const OPTIONS = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
}

function useIsVisible<T extends Element>(elementRef: MutableRefObject<T>) {
  const [ isVisible, setIsVisible ] = useState(false)

  useEffect(() => {
    if (elementRef.current) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(elementRef.current)
          }
        })
      }, OPTIONS)
      observer.observe(elementRef.current)
    }
  }, [ elementRef ])
  return isVisible
}

export default useIsVisible
