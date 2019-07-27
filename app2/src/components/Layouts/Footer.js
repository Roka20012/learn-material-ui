import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

class Footer extends React.Component {
    onIndexSelected = (e, index) => {
        const category = index === 0 ? '' : this.props.muscles[index - 1]
        this.props.onSelect(category);
    }

    render() {
        const { muscles, category } = this.props;
        const index = category ? muscles.findIndex(group => group === category) + 1 : 0;
        return (
            <Paper>
                <Tabs
                    value={index}
                    onChange={this.onIndexSelected}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab key="all" label="all" />
                    {muscles.map(group => (
                        <Tab key={group} label={group} />
                    ))}
                </Tabs>
            </Paper>
        );
    }
}

export default Footer;
