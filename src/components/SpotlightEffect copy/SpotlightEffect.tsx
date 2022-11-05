import './index.css'

export default function SomeGradient() {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        let rect = e.currentTarget.getBoundingClientRect();

        let x = e.clientX - rect.left
        let y = e.clientY - rect.top

        document.documentElement.style.setProperty('--x', `${x}px`)
        document.documentElement.style.setProperty('--y', `${y}px`)
    }


    return (    
        <div onMouseMove={e => handleMouseMove(e)}>        
            <div className='wrapper'>
                <a className='nav-element' href="#">Home</a>
                <a className='nav-element' href="#">About</a>
                <a className='nav-element' href="#">Contact</a>
            </div>
        </div>
    )
}