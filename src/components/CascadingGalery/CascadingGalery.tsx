import './index.css'


export default function RollingList() {

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        if (e.currentTarget.id === "middle") {
            alert("yay!")
            return;
        }

        if (e.currentTarget.id === "far-left") {      
            const middleElement = document.getElementById("middle")
            const rightElement = document.getElementById("right")
            const farRightElement = document.getElementById("far-right")
            const leftElement = document.getElementById("left")

            if (rightElement && middleElement && farRightElement && leftElement) {
                leftElement.id = "right"
                middleElement.id = "far-right"
                rightElement.id = "far-left"
                farRightElement.id = "left"
            }

            e.currentTarget.id = "middle"
            return;
        }

        if (e.currentTarget.id === "left") {      
            const middleElement = document.getElementById("middle")
            const rightElement = document.getElementById("right")
            const farRightElement = document.getElementById("far-right")
            const farLeftElement = document.getElementById("far-left")

            if (rightElement && middleElement && farRightElement && farLeftElement) {
                middleElement.id = "right"
                rightElement.id = "far-right"
                farRightElement.id = "far-left"
                farLeftElement.id = "left"
            }

            e.currentTarget.id = "middle"
            return;
        }

        if (e.currentTarget.id === "right") {      
            const middleElement = document.getElementById("middle")
            const leftElement = document.getElementById("left")
            const farRightElement = document.getElementById("far-right")
            const farLeftElement = document.getElementById("far-left")

            if (leftElement && middleElement && farRightElement && farLeftElement) {
                middleElement.id = "left"
                leftElement.id = "far-left"
                farLeftElement.id = "far-right"
                farRightElement.id = "right"
            }

            e.currentTarget.id = "middle"
            return;
        }

        if (e.currentTarget.id === "far-right") {      
            const middleElement = document.getElementById("middle")
            const rightElement = document.getElementById("right")
            const farLeftElement = document.getElementById("far-left")
            const leftElement = document.getElementById("left")

            if (rightElement && middleElement && farLeftElement && leftElement) {
                rightElement.id = "left"
                middleElement.id = "far-left"
                leftElement.id = "far-right"
                farLeftElement.id = "right"
            }

            e.currentTarget.id = "middle"
            return;
        }
        
    }

    return (
        <div className="item-wrapper">
            <div className="list-element" onClick={e => handleClick(e)} id="far-right"></div>
            <div className="list-element" onClick={e => handleClick(e)} id="right"></div>
            <div className="list-element" onClick={e => handleClick(e)} id="middle"></div>
            <div className="list-element" onClick={e => handleClick(e)} id="left"></div>
            <div className="list-element" onClick={e => handleClick(e)} id="far-left"></div>
        </div>
    )
}