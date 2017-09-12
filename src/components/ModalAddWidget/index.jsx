import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  TRANSIT_WIDGET_ID,
  SLACK_WIDGET_ID,
  GITHUB_WIDGET_ID,
} from '../../constants';
import {
  addWidget,
  hideAddWidgetModal,
} from '../../actions';

export const AddWidgetModal = props => (
  <Modal basic size="small" open={props.showAddWidgetModal}>
    <Header icon="new pied piper" content="Choose a widget" />
    <Modal.Content>
      <p>You may only display one of each widget at this time.</p>
    </Modal.Content>
    <Modal.Actions>
      <Button
        basic
        color="blue"
        onClick={() => props.addWidget(TRANSIT_WIDGET_ID)}
        inverted
        disabled={props.ids.includes(TRANSIT_WIDGET_ID)}
      >
        <Icon name="rocket" size="large" />Transit
      </Button>
      <Button
        basic
        color="blue"
        onClick={() => props.addWidget(GITHUB_WIDGET_ID)}
        inverted
        disabled={props.ids.includes(GITHUB_WIDGET_ID)}
      >
        <Icon name="github" size="large" /> GitHub
      </Button>
      <Button
        basic
        color="blue"
        onClick={() => props.addWidget(SLACK_WIDGET_ID)}
        inverted
        disabled={props.ids.includes(SLACK_WIDGET_ID)}
      >
        <Icon name="slack" size="large" /> Slack
      </Button>
      <Button
        basic
        color="red"
        onClick={props.hideAddWidgetModal}
        inverted
      >
        <Icon name="cancel" size="large" /> Cancel
      </Button>
    </Modal.Actions>
  </Modal>
);

AddWidgetModal.propTypes = {
  showAddWidgetModal: PropTypes.bool.isRequired,
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  addWidget: PropTypes.func.isRequired,
  hideAddWidgetModal: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
  const showAddWidgetModal = state.widgets.showAddWidgetModal;
  const ids = state.widgets.ids;
  return { showAddWidgetModal, ids };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  addWidget,
  hideAddWidgetModal,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddWidgetModal);
