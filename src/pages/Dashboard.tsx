import SideBar from "../components/common/SideBar"
import Test from "../components/common/Test"
import Footer from "../components/sideBar/Footer"
import { useState } from "react"

const Dashboard = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelected = (itemName: string) => {
        setSelectedItem(itemName)
    }

    const renderComponent = () => {
        switch (selectedItem) {
            case 'Footer':
                return <Footer />
            default:
                return null
        }
    }

    return (
        <div>
            <SideBar
                selectedItem={selectedItem}
                handleSelected={handleSelected}
            />
            {/* <Test /> */}
            <div className="ml-72 mt-3 mr-4">
                {renderComponent()}
            </div>

        </div>
    )
}

export default Dashboard