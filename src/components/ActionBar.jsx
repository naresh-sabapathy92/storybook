import { Row, Col, Button, Divider } from 'antd';
import { connect } from 'react-redux';
import React from 'react';

const ActionBar = ({ language, onReset, ...props }) => {
  const { global } = language;
  return (
    <div>
      <Divider />

      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button className="custom-reset-button" onClick={onReset}>{global.buttons.reset}</Button>
          <Button type="primary" htmlType="submit">{global.buttons.submit}</Button>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state =>({
  language: state.app.language,
});

export default connect(mapStateToProps)(ActionBar);