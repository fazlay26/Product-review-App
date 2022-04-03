import { useEffect, useState } from "react"

const useThreeReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('data1.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews]
}
export default useThreeReview