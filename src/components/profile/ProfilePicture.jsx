import React from 'react'

const ProfilePicture = ({display}) => {

    const uploadPicture = (e) => {
        e.preventDefault();
        console.log("what's up doc")

        

    }

    return (
        <main>
            <section onClick={display} className='min-h-screen absolute bg-black opacity-80 w-full top-0 left-0 z-20 flex items-center justify-center'>
            </section>
            <article className="absolute z-50 w-full text-black  text-center bg-white opacity-100 border-2">
                    <form className='p-8 font-bold w-fit mx-auto xs:text-3xl' action="pictures" onSubmit={uploadPicture}>
                        <label className='mb-4 block' type="image">Update Profile Picture</label>
                        <input className='block'
                                type="file"
                                name="image" 
                                id="image"
                                />
                        <button className=' bg-blue-400 rounded-lg h-8 mt-8 px-2 text-white font-bold' type='submit'>update</button>
                    </form>
                </article>
        </main>
    )
}

export default ProfilePicture
