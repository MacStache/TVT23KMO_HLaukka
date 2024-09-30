import {useState, useRef, useEffect} from 'react';

const useAbortableFetch = (url) => {
  const [json, setJson] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState (null)
  const controllerRef = useRef()

  useEffect(() => {
    getData()
  }, [url])

  const getData = () => {
    if (controllerRef.current) {
      controllerRef.current.abort()
    }

    controllerRef.current = new AbortController()
    const signal = controllerRef.current.signal

    setLoading(true)
    fetch(url,{signal})
      .then(response => response.json())
      .then(json => {
        setJson(json)
      }).catch(error => {
        setError(error)
      })
      setLoading(false)
  }
  return {json, loading, error}
}

export default useAbortableFetch