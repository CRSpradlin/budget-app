import { Purchase, PurchaseCategory } from "../../shared/types";

const GetProps = () => {
    const scriptProps = PropertiesService.getScriptProperties();

    return scriptProps.getProperties();
}

const SetNewPurchaseCategoryUsage = (newPurchase: Purchase) => {
    const propKey = 'TRANSACTION_MAP';
    const scriptProps = PropertiesService.getScriptProperties();

    const categoryMapping = JSON.parse(scriptProps.getProperty(propKey) || '{}');
    const mappingDescription = newPurchase.description.replace(/\$([0-9,.]+)/, '').replace(/ \(Add. Tip: \$([0-9,.]+)\)/, '');
    categoryMapping[mappingDescription] = newPurchase.category;

    scriptProps.setProperty(propKey, JSON.stringify(categoryMapping));
}

const GetExpectedPurchaseCategory = (purchaseDescription : string): PurchaseCategory => {
    const propKey = 'TRANSACTION_MAP';
    const scriptProps = PropertiesService.getScriptProperties();

    const categoryMapping = JSON.parse(scriptProps.getProperty(propKey) || '{}');

    return PurchaseCategory[categoryMapping[purchaseDescription.replace(/\$([0-9,.]+)/, '')] || 'Uncategorized'];
}

export { GetProps, GetExpectedPurchaseCategory, SetNewPurchaseCategoryUsage };