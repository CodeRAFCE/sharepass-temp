import "./tinytitle.css";

function TinyTitle({title, textcolor}) {
    return (
        <div className="tiny_title_wrap">
            <svg width={12} height={11} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_152_55743)">
                    <path d="M11.0953 8.24996L6.33215 11L1.56901 8.24996L1.56901 2.74996L6.33215 -4.43795e-05L11.0953 2.74996L11.0953 8.24996Z" fill="#7829F9" />
                    <path d="M6.31553 11.0058L1.57704 8.27002L1.55364 2.76855L6.3227 5.52197L6.31553 11.0058Z" fill="#02F3A2" />
                </g>
                <defs>
                    <clipPath id="clip0_152_55743">
                        <rect width={11} height={11} fill="white" transform="matrix(-1 0 0 1 11.8322 0)" />
                    </clipPath>
                </defs>
            </svg>
            <p style={{color:`${textcolor}`}}>{title}</p>
        </div>
    )
}

export default TinyTitle;