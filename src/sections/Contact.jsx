import React from 'react'

const Contact = () => {
    return (
        <section className="py-20" id="contact">
            <div className="flex flex-col max-sm:gap-20 md:min-h-[400px] justify-between items-end max-sm:px-3">
                <div className="flex flex-col gap-3 text-right">
                    <p className="font-futura_maxi_book text-4xl max-sm:text-2xl">FUYIN TECHNOLOGY INC</p>
                    <p className="font-harmonyos_sans_sc font-thin text-2xl max-sm:text-lg text-gray">Dedicated to Making TikTok Shop Brands Top 1 in Their Category</p>
                </div>
                <div className="font-futura_maxi_demi text-7xl max-sm:text-5xl bg-linear-to-r text-transparent bg-clip-text from-[rgb(255,118,15)] to-[rgb(240,41,29)]">Contact Us</div>
            </div>
        </section>
    )
}
export default Contact
