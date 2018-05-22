import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import DeleteModal from './DeleteModal';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = (expense) => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  onCancel = () => {
    this.setState({
      showModal: false
    });
  }
  onShowModal = () => {
    this.setState({
      showModal: true
    });
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Editing Expense: <span>{this.props.expense.description}</span></h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button--secondary" onClick={this.onShowModal}>Remove Expense</button>
          <DeleteModal 
            showModal={this.state.showModal} 
            handleClearSelected={this.onRemove}
            handleCancel={this.onCancel}
            expenseTitle={this.props.expense.description}
            expenseAmount={this.props.expense.amount} 
           />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  }
};

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
