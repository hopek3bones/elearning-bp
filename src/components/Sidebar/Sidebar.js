import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import logobp from "../../assets/logobp.png";
import cn from "classnames";

const Sidebar = (props) => {

  const {
    activeItem = '',
    ...restProps
  } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false)

  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true)
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false)
      }, 0);
    }
  }, [props.sidebarOpened])

  return (
    <nav className={cn(s.root, {[s.sidebarOpen]: burgerSidebarOpen})} >
      <header className={s.logo}>
        <img width={100}  src={logobp} alt="logo" />
      </header>
      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Tableau de bord"
          isHeader
          iconName={<i className={'eva eva-layout-outline'}/>}
          link="/template/dashboard"
          index="dashboard"
        />
        
        
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Catégories"
          isHeader
          iconName={<i className={'eva eva-cube-outline'}/>}
          link="/template/tables"
          index="tables"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Cours"
          isHeader
          iconName={<i className={'eva eva-book-outline'}/>}
          link="/template/cours"
          index="typography"
        />
        
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Messages"
          isHeader
          iconName={<i className={'eva eva-email-outline'}/>}
          link="/template/tables"
          index="message"
          badge="3"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Badges"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/template/typography"
          index="typography"
        /> 
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Calendrier"
          isHeader
          iconName={<i className={'eva eva-calendar-outline'}/>}
          link="/template/tables"
          index="tables"
        />
    
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Notifications"
          isHeader
          iconName={<i className={'eva eva-bell-outline'}/>}
          link="/template/notifications"
          index="notifications"
        />
        {/* <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="UI Elements"
          isHeader
          iconName={<i className={'eva eva-cube-outline'}/>}
          link="/template/uielements"
          index="uielements"
          childrenLinks={[
            {
              header: 'Charts', link: '/template/ui-elements/charts',
            },
            {
              header: 'Icons', link: '/template/ui-elements/icons',
            },
            {
              header: 'Google Maps', link: '/template/ui-elements/maps',
            },
          ]}
        /> */}
      </ul>

      <h5 className={s.navTitle}>TEMPLATE</h5>
      <div >
      <ul >
        <li className='list-group-item'>

          Centre d'aide
        </li>
        <li className='list-group-item'>
        <i className={'eva eva-setting-outline'}/>
          Paramètres
        </li>
        <li className='list-group-item'>

          Déconnexion
        </li>
      </ul>
      </div>
      
      {/* <div className="bg-widget d-flex mt-auto ml-1">
        <Button className="rounded-pill my-3 body-2 d-none d-md-block" type="submit" color="secondary-red">Unlock Full Version</Button>
      </div> */}
    </nav>
  );
}

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
