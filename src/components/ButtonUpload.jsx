import React, { useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { Tooltip, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { ButtonPrimary } from '..';

const ButtonUpload = ({ accept, uploadFile, defaultFileList, label, }) => {

    const [fileList, setFileList] = useState(defaultFileList);

    const moveRow = useCallback(
        (dragIndex, hoverIndex) => {
            const dragRow = fileList[dragIndex];
            setFileList(
                update(fileList, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragRow],
                    ],
                }),
            );
        },
        [fileList],
    );

    const onChange = ({ file, fileList: newFileList, event }) => {
        setFileList(newFileList);
        if (file.status === 'done') {
            message.success(`${file.name} file uploaded successfully`);
        } else if (file.status === 'error') {
            message.error(`${file.name} file upload failed.`);
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <Upload
                className='upload-button'
                accept={accept}
                customRequest={uploadFile}
                fileList={fileList}
                onChange={onChange}
                itemRender={(originNode, file, currFileList) => (
                    <DragableUploadListItem
                        originNode={originNode}
                        file={file}
                        fileList={currFileList}
                        moveRow={moveRow}
                    />
                )}
            >
                <ButtonPrimary type='secondary' icon={<UploadOutlined />} label={label} />
            </Upload>
        </DndProvider>
    );
};

export default ButtonUpload;

const DragableUploadListItem = ({ originNode, moveRow, file, fileList }) => {

    const type = 'DragableUploadList';
    const ref = useRef();
    const index = fileList.indexOf(file);

    const [{ isOver, dropClassName }, drop] = useDrop({
        accept: type,
        collect: monitor => {
            const { index: dragIndex } = monitor.getItem() || {};
            if (dragIndex === index) {
                return {};
            }
            return {
                isOver: monitor.isOver(),
                dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
            };
        },
        drop: item => {
            moveRow(item.index, index);
        },
    });

    const [, drag] = useDrag({
        type,
        item: { index },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drop(drag(ref));

    const errorNode = <Tooltip title="Upload Error">{originNode.props.children}</Tooltip>;
    return (
        <div
            ref={ref}
            className={`ant-upload-draggable-list-item ${isOver ? dropClassName : ''}`}
            style={{ cursor: 'move' }}
        >
            {file.status === 'error' ? errorNode : originNode}
        </div>
    );
};
