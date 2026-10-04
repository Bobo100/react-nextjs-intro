
import Image from 'next/image'
import profilePic from '../../../public/images/profile.jpg'

function LocalImage() {
    return (
        <div className='flex'>
            <Image
                src={profilePic}
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <Image
                src={profilePic}
                alt="Picture of the author"
                width={500}
                height={500}
                quality={1}
            />
        </div>
    )
}

export default LocalImage
