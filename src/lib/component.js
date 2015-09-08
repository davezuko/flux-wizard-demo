export function getComponentTitle (component) {
  try {
    if (component.props && component.props.title) {
      return component.props.title;
    } else if (component.type && component.type.name) {
      return component.type.name.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    } else if (component.name) {
      return component.name.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    }
  } catch (e) {}
  
  return 'UNNAMED COMPONENT';
}
