import './featuredInfo.css';
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"


export default function FeaturedInfo() {
  return (
        <div className='featured'>
            <div className="featuredItem">
                {/* REVENUE */}
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$20,000</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                {/* SALES */}
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$20,000</span>
                    <span className="featuredMoneyRate">
                        -1.5 <ArrowDownward className='featuredIcon negative' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                {/* COST */}
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7,224</span>
                    <span className="featuredMoneyRate">
                        +9.4 <ArrowUpward className='featuredIcon' />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
