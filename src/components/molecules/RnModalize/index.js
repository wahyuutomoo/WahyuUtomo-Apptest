import React, { forwardRef, memo } from 'react';
import { View, Text } from 'react-native';
import { Modalize } from 'react-native-modalize';

const RnModalize = forwardRef(({ children, loading, panGestureEnabled, withHandle, alwaysOpen, dragToss, adjustToContentHeight, disableScrollIfPossible, snapPoint, modalHeight, childrenMarginTop, HeaderComponent }, ref) => {
    return (
        <Modalize
            ref={ref}
            panGestureEnabled={panGestureEnabled}
            withHandle={withHandle}
            handlePosition={'inside'}
            scrollViewProps={{ showsVerticalScrollIndicator: false, contentContainerStyle: { flexGrow: 1 } }}
            alwaysOpen={alwaysOpen}
            dragToss={dragToss}
            adjustToContentHeight={adjustToContentHeight}
            disableScrollIfPossible={disableScrollIfPossible}
            snapPoint={snapPoint}
            modalHeight={modalHeight}
            // childrenStyle={{ marginHorizontal: 20, marginTop: childrenMarginTop ? childrenMarginTop : 55 }}
            HeaderComponent={HeaderComponent}
            handleStyle={{ marginTop: 10 }}
            // rootStyle={{ backgroundColor: 'f' }}
            modalStyle={{ flex: adjustToContentHeight ? 0 : 1, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}


        >
            {children}
        </Modalize>
    )
});

export default memo(RnModalize);