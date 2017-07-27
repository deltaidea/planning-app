import { connect } from 'react-redux';
import { ClientList } from './ClientList';

const mapStateToProps = state => ({
  clients: state.clients
});

export default connect(mapStateToProps)(ClientList);
