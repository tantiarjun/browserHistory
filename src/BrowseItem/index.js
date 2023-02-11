import './index.css'

const BrowseItem = props => {
  const {historyDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="history-card-container">
      <div className="time-and-logo-container">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logoUrl" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>

      <div>
        <button
          className="button"
          data-testid="delete"
          type="button"
          onClick={onDeleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="deleteIcon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowseItem
