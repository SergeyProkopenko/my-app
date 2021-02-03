import {connect} from 'react-redux';

import {fetchUsers} from "../actions/userActions";
import UserTableComponent from "../components/UserTable/UserTableComponent";

const mapStateToProps = state => {
    return {
        data: state.user.data,
        isLoading: state.user.isLoading,
        error: state.user.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetch: () => dispatch(fetchUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTableComponent);
