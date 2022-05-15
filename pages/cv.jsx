import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

const Cv = () => {

    const [src, setSrc] = useState("/pictures/english.jpg")

    const handleChange = (e) => {
        setSrc(e.target.value)
    }
    return (
        <div>
            <Head>
                <title>CV</title>
                <meta name="description" content="My cv" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='cvContainer'>
                <div className="btnsContainer">
                    <select name="language" className="language" onChange={handleChange}>
                        <option value="/pictures/english.jpg">English</option>
                        <option value="/pictures/french.jpg">French</option>
                    </select>
                    <a className='downloadBtn' href={src} download>Download</a>
                </div>
                <div className="imgContainer">
                    <Image src={src} alt="cv picture" layout='fill' objectFit='contain' className='x' />
                </div>
            </div>
        </div>
    )
}

export default Cv