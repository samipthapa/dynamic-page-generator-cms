import navBasic from "../../data/header/nav-basic.json"
import heroSplit from "../../data/hero-section/Split.json"
import slider from "../../data/slider-section/slider.json"
import detailTile from "../../data/detail-section/detail-tile.json"
import contactCentered from "../../data/contact-section/contact-centered.json"
import footerCentered from "../../data/footer/centered.json"
import deserialize from "../../utils/deserialize"

const Preview = () => {
    let navBasicSection = deserialize(navBasic)
    let heroSplitSection = deserialize(heroSplit)
    let sliderSection = deserialize(slider)
    let detailTileSection = deserialize(detailTile)
    let footerCenteredSection = deserialize(footerCentered)
    let contactCenteredSection = deserialize(contactCentered)

    return (
        <div className="scale-95 bg-neutral-100"
            style={{
                marginTop: "-4%"
            }}
        >
            {navBasicSection}
            {heroSplitSection}
            {detailTileSection}
            {sliderSection}
            {contactCenteredSection}
            {footerCenteredSection}
        </div>
    )
}

export default Preview