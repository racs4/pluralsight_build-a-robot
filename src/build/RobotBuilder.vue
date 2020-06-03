<template>
  <div class="content">
      <button class="add-to-cart" @click="addToCart" > Add to Cart </button>
    <div class="top-row">
      <div class="top part" :class="saleBorder">
        <div class="robot-name">
            {{selectedRobot.head.title}}
            <span v-if="selectedRobot.head.onSale" class="sale"> Sale! </span>
        </div>
        <img :src="selectedRobot.head.src" title="head" />
        <button @click="selectPreviusHead" class="prev-selector">&#9668;</button>
        <button @click="selectNextHead" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img :src="selectedRobot.leftArm.src" title="left arm" />
        <button @click="selectPreviusLeftArm" class="prev-selector">&#9650;</button>
        <button @click="selectNextLeftArm" class="next-selector">&#9660;</button>
      </div>
      <div class="center part">
        <img :src="selectedRobot.torso.src" title="left arm" />
        <button @click="selectPreviusTorso" class="prev-selector">&#9668;</button>
        <button @click="selectNextTorso" class="next-selector">&#9658;</button>
      </div>
      <div class="right part">
        <img :src="selectedRobot.rightArm.src" title="left arm" />
        <button @click="selectPreviusRightArm" class="prev-selector">&#9650;</button>
        <button @click="selectNextRightArm" class="next-selector">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part">
        <img :src="selectedRobot.base.src" title="left arm" />
        <button @click="selectPreviusBases" class="prev-selector">&#9668;</button>
        <button @click="selectNextBases" class="next-selector">&#9658;</button>
      </div>
    </div>
    <div>
        <h1>Cart</h1>
        <table>
            <thead>
                <tr>
                    <th>Robot</th>
                    <th class="cost"> Cost </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(robot, index) in cart" :key="index">
                    <td>{{robot.head.title}}</td>
                    <td class="cost">{{robot.cost}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import avaliableParts from '../data/parts';

function getPreviusValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex >= length ? 0 : incrementedIndex;
}

export default {
  name: 'RobotBuilder',
  created() {
    console.log('created');
  },
  data() {
    return {
      avaliableParts,
      cart: [],
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBasesIndex: 0,
    };
  },
  computed: {
    saleBorder() {
      return this.selectedRobot.head.onSale ? 'sale-border' : '';
    },
    selectedRobot() {
      return {
        head: avaliableParts.heads[this.selectedHeadIndex],
        leftArm: avaliableParts.arms[this.selectedLeftArmIndex],
        rightArm: avaliableParts.arms[this.selectedRightArmIndex],
        torso: avaliableParts.torsos[this.selectedTorsoIndex],
        base: avaliableParts.bases[this.selectedBasesIndex],
      };
    },
  },
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost = robot.head.cost
            + robot.leftArm.cost
            + robot.rightArm.cost
            + robot.torso.cost
            + robot.base.cost;
      this.cart.push({ ...robot, cost });
    },
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(
        this.selectedHeadIndex, this.avaliableParts.heads.length,
      );
    },
    selectPreviusHead() {
      this.selectedHeadIndex = getPreviusValidIndex(
        this.selectedHeadIndex, this.avaliableParts.heads.length,
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValidIndex(
        this.selectedLeftArmIndex, this.avaliableParts.arms.length,
      );
    },
    selectPreviusLeftArm() {
      this.selectedLeftArmIndex = getPreviusValidIndex(
        this.selectedLeftArmIndex, this.avaliableParts.arms.length,
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValidIndex(
        this.selectedRightArmIndex, this.avaliableParts.arms.length,
      );
    },
    selectPreviusRightArm() {
      this.selectedRightArmIndex = getPreviusValidIndex(
        this.selectedRightArmIndex, this.avaliableParts.arms.length,
      );
    },
    selectNextTorso() {
      this.selectedTorsoIndex = getNextValidIndex(
        this.selectedTorsoIndex, this.avaliableParts.torsos.length,
      );
    },
    selectPreviusTorso() {
      this.selectedTorsoIndex = getPreviusValidIndex(
        this.selectedTorsoIndex, this.avaliableParts.torsos.length,
      );
    },
    selectNextBases() {
      this.selectedBasesIndex = getNextValidIndex(
        this.selectedBasesIndex, this.avaliableParts.bases.length,
      );
    },
    selectPreviusBases() {
      this.selectedBasesIndex = getPreviusValidIndex(
        this.selectedBasesIndex, this.avaliableParts.bases.length,
      );
    },
  },
};
</script>

<style scoped>
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
}
.part img {
  width: 165px;
}
.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.robot-name {
    position: absolute;
    top: -25px;
    text-align: center;
    width: 100%;
}
.sale {
    color: red;
}
.content {
    position: relative;
}
.add-to-cart {
    position: absolute;
    right: 30px;
    width: 220px;
    padding: 3px;
    font-size: 16px;
}
td, th {
    text-align: left;
    padding: 5px;
    padding-right: 20px;
}
.cost {
    text-align: right;
}
.sale-border {
    border: 3px solid red;
}
</style>
