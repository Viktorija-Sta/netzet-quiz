'use client'

import type { ComponentType } from 'react'
import IconConfidence from '../../assets/icons/IconConfidence.svg'
import IconControl from '../../assets/icons/IconControl.svg'
import IconEmotional from '../../assets/icons/IconEmotional.svg'
import IconHabit from '../../assets/icons/IconHabit.svg'
import IconHealth from '../../assets/icons/IconHealth.svg'
import IconMoney from '../../assets/icons/IconMoney.svg'
import IconNo from '../../assets/icons/IconNo.svg'
import IconNotSure from '../../assets/icons/IconNotSure.svg'
import IconPerformance from '../../assets/icons/IconPerformance.svg'
import IconRelationships from '../../assets/icons/IconRelationships.svg'
import IconRelaxation from '../../assets/icons/IconRelaxation.svg'
import IconRole from '../../assets/icons/IconRole.svg'
import IconSocializing from '../../assets/icons/IconSocializing.svg'
import IconStress from '../../assets/icons/IconStress.svg'
import IconYes from '../../assets/icons/IconYes.svg'
import Frame from '../../assets/icons/Frame.svg'
import IconBlock from '../../assets/icons/IconBlock.svg'
import IconCraving from '../../assets/icons/IconCraving.svg'
import IconDesire from '../../assets/icons/IconDesire.svg'
import IconStress2 from '../../assets/icons/IconStress2.svg'
import Target from '../../assets/icons/Target.svg'


const iconMap: { [key: string]: ComponentType<{ className?: string }> } = {
    IconConfidence,
    IconControl,
    IconEmotional,
    IconHabit,
    IconHealth,
    IconMoney,
    IconNo,
    IconNotSure,
    IconPerformance,
    IconRelationships,
    IconRelaxation,
    IconRole,
    IconSocializing,
    IconStress,
    IconYes,
    Frame,
    IconBlock,
    IconCraving,
    IconDesire,
    IconStress2,
    Target,
}

export const QuizIcon = ({ iconName, className }: { iconName: string; className?: string }) => {
    const IconComponent = iconMap[iconName]

    if (!IconComponent) {
        return <span className="w-6 h-6 mr-3">[?]</span>
    }
    return <IconComponent className={`w-6 h-6 mr-3 ${className ?? ''}`} />
}