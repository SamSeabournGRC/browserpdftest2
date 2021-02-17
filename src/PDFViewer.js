import React from 'react'

export default function PDFViewer() {

    const style = { 
        container: {
            position: "fixed",
            top: "120px",
            right: "20px"
        }
    }

    return (
        <div>
             <iframe src="/test1.pdf" 
                title="test"
                width={window.innerWidth} 
                height={window.innerHeight}>
            </iframe>
            <div style={style.container}>
                <button> TEST BUTTON </button>
                <button> TEST BUTTON </button>
                <button> TEST BUTTON </button>
            </div>
        </div>
    )
}
