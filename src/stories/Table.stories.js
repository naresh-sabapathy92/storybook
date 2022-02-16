import { TablePaginated } from "../components";
import moment from "moment";

export default {
    title: 'Components/Table',
    component: TablePaginated
};

export const Table = () => {

    const data = {
        "content": [
            {
                "id": 886,
                "securityName": "Bond Zero Coupon 2022 - 0214 03",
                "bondSecurityType": {
                    "label": "",
                    "value": "",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "BONDZC2022021404",
                "issuingCompany": null,
                "issuanceQuantity": "0.00000000",
                "timestamp": "2022-02-14T07:33:55.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "SUCCESS",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 885,
                "securityName": "Bond Zero Coupon 2022 - 0214 03",
                "bondSecurityType": {
                    "label": "",
                    "value": "",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "BONDZC2022021403",
                "issuingCompany": null,
                "issuanceQuantity": "0.00000000",
                "timestamp": "2022-02-14T07:31:32.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "SUCCESS",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 884,
                "securityName": "Bond Zero Coupon 2022 - 0214 02",
                "bondSecurityType": {
                    "label": "",
                    "value": "",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "BONDZC2022021402",
                "issuingCompany": null,
                "issuanceQuantity": "0.00000000",
                "timestamp": "2022-02-14T07:30:15.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "SUCCESS",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 881,
                "securityName": "PDSBONDSB03",
                "bondSecurityType": {
                    "label": "",
                    "value": "",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "PDSBONDSB03",
                "issuingCompany": null,
                "issuanceQuantity": "10000.00000000",
                "timestamp": "2022-02-14T07:25:23.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "SUCCESS",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 880,
                "securityName": "PDSBONDSB02",
                "bondSecurityType": {
                    "label": "",
                    "value": "",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "PDSBONDSB02",
                "issuingCompany": null,
                "issuanceQuantity": "10000.00000000",
                "timestamp": "2022-02-14T06:49:19.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "SUCCESS",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 879,
                "securityName": "PDSBONDSB01",
                "bondSecurityType": {
                    "label": "",
                    "value": "",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "PDSBONDSB01",
                "issuingCompany": null,
                "issuanceQuantity": "10000.00000000",
                "timestamp": "2022-02-14T06:42:17.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "SUCCESS",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 857,
                "securityName": "08FEBTEST01",
                "bondSecurityType": {
                    "label": "Corporate",
                    "value": "CORPORATE",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "08FEBTEST01",
                "issuingCompany": "08FEBTEST01",
                "issuanceQuantity": "10000.00000000",
                "timestamp": "2022-02-08T01:06:49.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "ACTIVE",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 837,
                "securityName": "27JANBONDYE",
                "bondSecurityType": {
                    "label": "Corporate",
                    "value": "CORPORATE",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "27JANBONDYE",
                "issuingCompany": "STACS",
                "issuanceQuantity": "100.00000000",
                "timestamp": "2022-01-27T05:30:23.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "ACTIVE",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "Bond",
                    "value": "BONDS",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 794,
                "securityName": "GBSTN6",
                "bondSecurityType": {
                    "label": "Green Bonds",
                    "value": "GREEN_BONDS",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "GBSTN6",
                "issuingCompany": "stacs",
                "issuanceQuantity": "10.00000000",
                "timestamp": "2022-01-24T14:00:11.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "ACTIVE",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "ESG Bond",
                    "value": "GREEN_FINANCE",
                    "disabled": false,
                    "checked": false
                }
            },
            {
                "id": 793,
                "securityName": "GBSTN4",
                "bondSecurityType": {
                    "label": "Green Bonds",
                    "value": "GREEN_BONDS",
                    "disabled": false,
                    "checked": false
                },
                "bondSecurityCode": "GBSTN4",
                "issuingCompany": "stacs",
                "issuanceQuantity": "10.00000000",
                "timestamp": "2022-01-24T10:26:22.000+0000",
                "bondStatus": {
                    "label": "Success",
                    "value": "ACTIVE",
                    "disabled": false,
                    "checked": false
                },
                "securityType": {
                    "label": "ESG Bond",
                    "value": "GREEN_FINANCE",
                    "disabled": false,
                    "checked": false
                }
            }
        ],
        "pageable": {
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 10,
            "paged": true,
            "unpaged": false
        },
        "totalElements": 309,
        "totalPages": 31,
        "last": false,
        "number": 0,
        "size": 10,
        "sort": {
            "sorted": true,
            "unsorted": false,
            "empty": false
        },
        "numberOfElements": 10,
        "first": true,
        "empty": false
    };

    const fetchData = () => null;

    const columns = [
        {
            title: 'Security Code', dataIndex: "bondSecurityCode", key: 'securityCode',
            sorter: true
        },
        {
            title: 'Security Name', dataIndex: "securityName", key: 'securityName',
            sorter: true,
        },
        {
            title: 'Security Type', dataIndex: "bondSecurityType", key: 'bondSecurityType',
        },
        {
            title: 'Issuing Company', dataIndex: "issuingCompany", key: 'issuingCompany',
            sorter: true,
        },
        {
            title: 'Issuing Quantity', dataIndex: "bondIssuanceParameter.issuanceQuantity", key: 'issuanceQuantity',
            sorter: true,
        },
        {
            title: 'Timestamp', key: 'timestamp', dataIndex: "createdDate",
            sorter: true,
            render: (text, record) => moment(text).format('DD-MMM-YYYY HH:mm:ss')
        },
        {
            title: 'Status', dataIndex: "", key: 'bondStatus',
        },
    ];

    return (
        <TablePaginated
            searchPlaceHolder='Search'
            fetchData={fetchData}
            dataSource={data}
            columns={columns}
        />
    )
}