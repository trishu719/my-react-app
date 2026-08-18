export const HighlightText = ({ text, keyword }) => {

    if (!keyword || !text) {
        return text
    }
    const parts = text.split(
        new RegExp(`(${keyword})`, "gi")
    )
    return (
        <>
            {parts.map((part, index) => {

                if (part.toLowerCase() === keyword.toLowerCase()) {
                    return (
                        <span className="highlight" key={index}>
                            {part}
                        </span>
                    )
                }
                return part
            })}
        </>
    )
}