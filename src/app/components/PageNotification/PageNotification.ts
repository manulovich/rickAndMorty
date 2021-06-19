import Component from '../Component'
import timer from '../../utils/timer'

class PageNotification extends Component {

    render(message: string) {
        this.insertNode.insertAdjacentHTML('beforeend', `
            <div class="notification">
                <div class="notification__icon">
                    <span class="icon-morty"></span>
                </div>
                <p class="notification__message">${message}</p>
            </div>
        `);
        
        timer(3000).then(() => {
            this.insertNode.innerHTML = '';
        })
    }
}

export default PageNotification