import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Space } from 'antd';
import { InputSearch, ButtonPrimary, ButtonDropdown } from '..';

const TablePaginated = ({
    searchPlaceHolder,
    columns,
    fetchData,
    dataSource,
    dropDown,
    buttons = [],
}) => {

    const [callData, setCallData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [sortInfo, setSortInfo] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState();

    const onPageChange = (page, pageSize) => {
        setPagination(prevState => ({ ...prevState, pageNumber: page - 1, pageSize: pageSize }));
        setCallData(true);
        setLoading(true);
    };

    const onTableChange = (pagination, filter, sort) => {
        setFilteredInfo(filter);
        setSortInfo(sort);
        setCallData(true);
        setLoading(true);
    }

    const onSearch = (value) => {
        setPagination(prevState => ({ ...prevState, searchTerm: value }));
        setCallData(true);
        setLoading(true);
    }

    const [pagination, setPagination] = useState({
        pageNumber: 0,
        pageSize: 10,
        total: null,
        onChange: onPageChange,
        searchTerm: ''
    });

    const [tableButtons, setTableButtons] = useState();

    const renderButtons = () => {
        if (buttons.length === 0) return;
        let renderedButtons;
        if (dropDown) {
            renderedButtons = <ButtonDropdown label={dropDown} buttons={buttons} />
        } else {
            renderedButtons = buttons.map((item, index) => {
                const button = index + 1 === buttons.length ?
                    <ButtonPrimary label={item.label} onClick={item.onClick} /> :
                    <ButtonPrimary style={{ marginRight: '1rem' }} label={item.label} onClick={item.onClick} />;

                return button;
            })
        }
        setTableButtons(renderedButtons);
    };

    useEffect(() => {
        renderButtons();
        fetchData(pagination); // Initial fetch of table data
        setLoading(true);
    }, []);

    useEffect(() => {
        if (callData) {
            fetchData(pagination, filteredInfo, sortInfo); // Fetch data on table change
            setCallData(false);
        }
    }, [callData]);

    useEffect(() => {
        if (!dataSource || dataSource.length === 0) return
        setPagination(prevState => ({
            ...prevState,
            pageNumber: dataSource.pageable.pageNumber,
            pageSize: dataSource.pageable.pageSize,
            total: dataSource.totalElements
        }));
        setData(dataSource.content);
        setLoading(false);
    }, [dataSource]);


    return (
        <Space style={{ width: '100%' }} direction='vertical' size='middle'>
            <Row justify='space-between'>
                <Col span={8}>
                    <InputSearch placeholder={searchPlaceHolder} onSearch={onSearch} />
                </Col>
                <Col>
                    {tableButtons}
                </Col>
            </Row>
            <div className='table-paginated'>
                <Table
                    columns={columns}
                    dataSource={data}
                    loading={loading}
                    pagination={pagination}
                    onChange={onTableChange}
                />
            </div>
        </Space>
    );
};

export default TablePaginated;
