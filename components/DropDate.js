var DropDate = function(props) {
    let day;
    switch (props.data) {
      case 'Mondays':
        day = "Poniedziałki";
        break;
      case 'Tuesdays':
        day = "Wtorki";
        break;
      case 'Wednesdays':
        day = "Środy";
        break;
      case 'Thursdays':
        day = "Czwartki";
        break;
      case 'Fridays':
        day = "Piątki";
        break;
      case 'Saturdays':
        day = "Soboty";
        break;
      case 'Sundays':
        day = "Niedziele";
        break;
      default:
        day = "Nieznany dzień tygodnia";
    }
    return (
        day
    )
}
export default DropDate;