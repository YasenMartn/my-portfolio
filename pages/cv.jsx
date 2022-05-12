import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Cv = () => {

    const [src, setSrc] = useState("/pictures/z.png")

    const handleChange = (e) => {
        setSrc(e.target.value)
    }
    return (
        <div>
            <Head>
                <title>CV</title>
                <meta name="description" content="My works" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='cvContainer'>
                <div className="left">
                    <select name="language" className="language" onChange={handleChange}>
                        <option value="/pictures/z.png">English</option>
                        <option value="/pictures/r.png">French</option>
                    </select>
                    <div className="imgContainer">
                        <Image src={src} alt="cv picture" layout='fill' objectFit='contain' className='x' />
                    </div>
                    <a className='mobileBtn' href={src} download>Download</a>
                </div>
                <div className="right">
                    <select name="language" className="language" onChange={handleChange}>
                        <option value="/pictures/z.png">English</option>
                        <option value="/pictures/r.png">French</option>
                    </select>
                    <a className='btnr' href={src} download>Download</a>
                </div>
            </div>
        </div>
    )
}

export default Cv