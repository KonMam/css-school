import './index.css'

export default function FollowingGradient() {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

        let windowWidth = window.innerWidth
        let windowHeight = window.innerHeight

        let rect = e.currentTarget.getBoundingClientRect();

        let x = Math.round(e.pageX / windowWidth * 100);
        let y = Math.round(e.pageY / windowHeight * 100)

        document.documentElement.style.setProperty('--x', `${x}%`)
        document.documentElement.style.setProperty('--y', `${y}%`)
    }


    return (    
        <div className='wrapper' onMouseMove={e => handleMouseMove(e)}>
                <a className='nav-element' href="#">Home</a>
                <a className='nav-element' href="#">About</a>
                <a className='nav-element' href="#">Contact</a>
        </div>
    )
}