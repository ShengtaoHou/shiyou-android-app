'use strict';

import React , {
    View,
    Text,
    Image,
    TouchableOpacity,
    Navigator,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var vw = Dimensions.get('window').width;
var vh = Dimensions.get('window').height;

class Namecard extends React.Component{
    render () {
        return (
            <View style={styles.namecard}>
                
                <View style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 25,
                    paddingRight: 25,
                  }}>
                    <Image
                        source={{uri:'http://ensorrow.github.io/img/head.gif'}}
                        width={80}
                        height={80}
                        style={styles.cardpic}
                    />
                </View>
                <View style={{flex: 1,paddingTop: 10}}>
                    <View style={{flexDirection:'row',paddingTop:5,paddingBottom:5}}>
                        <Text style={{color:'#8A56A1',fontSize: 16}}>王小明
                        </Text>
                        <Text style={{color: '#00469E',left: 5}}>♂
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',paddingBottom: 3}}>
                        <Text style={{}}>家长
                        </Text>
                    </View>
                    <Text style={{}}>陕西省西安市碑林区
                    </Text>
                </View>
            </View>
        )}
}
export default class extends React.Component{
    render () {
        return (
            <View>
                <View style={styles.statusbar}>
                </View>
               <View style={styles.header}>
                  <Text style={styles.headerText}>我的名片
                  </Text>
                </View>
                <ScrollView style={{height: vh-73}}>
                    <Namecard />
                    <View style={{paddingLeft: 5,paddingRight: 5,flexDirection: 'row',flexWrap: 'wrap'}}>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name="heart" style={styles.btnIcon} />
                            <Text style={styles.btnText}>我关注的</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name="star" style={styles.btnIcon} />
                            <Text style={styles.btnText}>关注我的</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name="pricetags" style={styles.btnIcon} />
                            <Text style={styles.btnText}>修改资料</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name="share" style={styles.btnIcon} />
                            <Text style={styles.btnText}>分享名片</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name='upload' style={styles.btnIcon}/>
                            <Text style={styles.btnText}>检查更新</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name="person" style={styles.btnIcon} />
                            <Text style={styles.btnText}>欢迎界面</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name="university" style={styles.btnIcon} />
                            <Text style={styles.btnText}>关于我们</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn,{width: vw/2-15}]}>
                            <Icon name="email" style={styles.btnIcon} />
                            <Text style={styles.btnText}>反馈意见</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    statusbar: {
        height: 0,
        backgroundColor: '#8956a1'
    },
    header: {
        backgroundColor: '#8956a1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 12
    },
    namecard: {
        backgroundColor: '#eee',
        flexDirection: 'row',
        marginTop: -4,
        marginBottom: 10
    },
    cardpic: {
        borderRadius: 40,
        backgroundColor: '#bfbfbf'
    },
    btn: {
        backgroundColor: '#8956a1',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 5,
        flexDirection: 'row',
        margin: 5,
    },
    btnIcon: {
        color: '#fff',
        fontSize: 24,
        right: 4,
    },
    btnText: {
        color: '#fff',
        left: 4,
    },
});