import { Content } from "./content";
import { DataList } from "./data-list";

export const PendindMessages = {
    Content: Content,
    DataList: DataList
}

export function PendingMessagesComponent() {
    return (
        <PendindMessages.Content>
            <PendindMessages.DataList items={["teste", "teste"]} />
        </PendindMessages.Content>
    )
}