import DonateItemDTO from "../dto/Donate.dto";

export const loadDonations = (setItem: Function, dataSource: DonateItemDTO[], id: String) => {
    const donateItem = dataSource.filter(x => x.id.toString() == id);
    if (donateItem.length > 0) {
        setItem(donateItem[0]);
    }
    else {}
}

export const navigateToHome = () => {
    window.location.href = "/web/";
}