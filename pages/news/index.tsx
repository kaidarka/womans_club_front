import React from 'react';
import {fetchNews as fetchNewsAction} from "../../store/actionCreators/news";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {makeSelectNews} from "../../store/selectors/news";
import {useMountEffect} from "../../hooks/useMountEffect";
import {NewsState} from "../../types/entites/news";

interface IProps {
    fetchNews: () => void;
    news: NewsState;
}

const Index = (props: IProps) => {
    const {fetchNews, news} = props;
    useMountEffect(() => {
        fetchNews();
    });
    console.log(news)

    return (
        <>
            Новости
        </>
    );
};


const mapDispatchToProps = {
    fetchNews: fetchNewsAction,
};

const mapStateToProps = createStructuredSelector({
    news: makeSelectNews(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
